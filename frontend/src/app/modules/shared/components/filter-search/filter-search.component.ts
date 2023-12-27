import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LazyLoadEvent } from 'primeng/api';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseCountry } from 'src/app/modules/admin/models/base-country.model';
import { BaseLot } from 'src/app/modules/admin/models/base-lot.model';
import { BaseTrade } from 'src/app/modules/admin/models/base-trade.model';
import { BaseCountryService } from 'src/app/modules/admin/services/base-country.service';
import { BaseLotService } from 'src/app/modules/admin/services/base-lot.service';
import { BaseTradeService } from 'src/app/modules/admin/services/base-trade.service';
import { Country } from 'src/app/modules/common/models/country.model';
import { Lot } from 'src/app/modules/common/models/lot.model';
import { Trade } from 'src/app/modules/common/models/trade.model';
import { LotService } from 'src/app/modules/common/services/lot.service';
import { TradeService } from 'src/app/modules/common/services/trade.service';
import { BaseCompanyCountry } from 'src/app/modules/company/models/base-company-country.model';
import { BaseCompanyLot } from 'src/app/modules/company/models/base-company-lot.model';
import { BaseCompanyTrade } from 'src/app/modules/company/models/base-company-trade.model';
import { Company } from 'src/app/modules/company/models/company.model';
import { Project } from 'src/app/modules/company/models/project.model';
import { BaseCompanyCountryService } from 'src/app/modules/company/services/base-company-country.service';
import { BaseCompanyLotService } from 'src/app/modules/company/services/base-company-lot.service';
import { BaseCompanyTradeService } from 'src/app/modules/company/services/base-company-trade.service';
import { CompanyService } from 'src/app/modules/company/services/company.service';
import { ProjectService } from 'src/app/modules/company/services/project.service';
import { Boq } from 'src/app/modules/smeta/models/boq.model';
import { BoqService } from 'src/app/modules/smeta/services/boq.service';
import { CountryService } from 'src/app/modules/smeta/services/country.service';
import { CurrencyService } from 'src/app/modules/smeta/services/currency.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.scss']
})
export class FilterSearchComponent  implements OnInit {
  filterSearchForm: FormGroup;

  @Input() wantSearch: boolean = true;
  @Input() wantCompany: boolean = false;
  @Input() wantProject: boolean = false;
  @Input() wantBoq: boolean = false;

  @Input() wantTrade: boolean = false;
  @Input() wantLot: boolean = false;
  @Input() wantCountry: boolean = false;

  @Input() wantBaseTrade: boolean = false;
  @Input() wantBaseLot: boolean = false;
  @Input() wantBaseCountry: boolean = false;

  @Input() wantBaseCompanyTrade: boolean = false;
  @Input() wantBaseCompanyLot: boolean = false;
  @Input() wantBaseCompanyCountry: boolean = false;

  first: number = 0;
  rows: number = 5;
  totalRecords: number = 0;
  queryParams: string = '?';
  pathSegments: string[];

  @Output() filterChangeEventEmitter: EventEmitter<void> = new EventEmitter<void>();
  @Output() searchSubmitEventEmitter: EventEmitter<void> = new EventEmitter<void>();
  @Output() clearSearchEventEmitter: EventEmitter<void> = new EventEmitter<void>();

  lazyLoadEvent: LazyLoadEvent = {};
  snapshotQueryParams: any;

  projects: Project[];
  companies: Company[];
  countries: BaseCountry[] | BaseCompanyCountry[] | Country[];
  boqs: Boq[];
  trades: BaseTrade[] | BaseCompanyTrade[] | Trade[];
  lots!: BaseLot[] | BaseCompanyLot[] | Lot[];

  constructor(
    public commonService: CommonService, 
    private route: ActivatedRoute, 
    private fb: FormBuilder,
    private location: Location,
    
    private baseTradeService: BaseTradeService,
    private baseLotService: BaseLotService, 
    private baseCountryService: BaseCountryService, 
    private companyService: CompanyService, 

    private baseCompanyTradeService: BaseCompanyTradeService,
    private baseCompanyLotService: BaseCompanyLotService, 
    private baseCompanyCountryService: BaseCompanyCountryService, 
    private projectService: ProjectService, 
    
    private tradeService: TradeService,
    private lotService: LotService, 
    private countryService: CountryService, 
    private boqService: BoqService, 
  ) {
    this.filterSearchForm = this.fb.group({
      search: '',
      company: '',
      project: '',
      boq: '',
      trade: '',
      lot: '',
      country: '',
    });
  }

  ngOnInit(): void {
    // Retrieve all necessary dropdown options
    this.fetchDropDownOptions();

    // Fetch query parameters from the ActivatedRoute snapshot
    // and patch values into filterSearchForm
    this.patchQueryParamsIntoForm();

    // lazyLoadEvent instance is used to create queryParams, so keeping updated this is very important
    this.lazyLoadEvent.first = 
        this.snapshotQueryParams.page ? 
        this.snapshotQueryParams.page_size * (this.snapshotQueryParams.page - 1) : 0;
    this.lazyLoadEvent.rows = 
        this.snapshotQueryParams.page_size ? 
        this.snapshotQueryParams.page_size : this.rows;
    this.lazyLoadEvent.sortField = 
        this.snapshotQueryParams.sort ? 
        this.snapshotQueryParams.sort : 'id';
    this.lazyLoadEvent.filters = 
        this.filterSearchForm.value;

    this.first = this.lazyLoadEvent.first
    this.rows = this.lazyLoadEvent.rows!;

    this.queryParams = this.commonService.buildPaginationParams(this.lazyLoadEvent);
  }

  onSearchSubmit(): void {
    if (this.filterSearchForm.valid) {
      this.searchSubmitEventEmitter.emit();
    }
  };

  clearSearch(): void {
    // Check if form is not null or undefined
    const searchControl = this.filterSearchForm.get('search');
    const companyControl = this.filterSearchForm.get('company');
    const projectControl = this.filterSearchForm.get('project');
    const tradeControl = this.filterSearchForm.get('trade');
    const lotControl = this.filterSearchForm.get('lot');
    const countryControl = this.filterSearchForm.get('country');
    const boqControl = this.filterSearchForm.get('boq');

    if (searchControl) searchControl.setValue('');
    if (companyControl) companyControl.setValue('');
    if (projectControl) projectControl.setValue('');
    if (tradeControl) tradeControl.setValue('');
    if (lotControl) lotControl.setValue('');
    if (countryControl) countryControl.setValue('');
    if (boqControl) boqControl.setValue('');

    this.queryParams = '?';
    this.clearSearchEventEmitter.emit();
  };

  onFilterChange(event: any): void {
    this.filterChangeEventEmitter.emit();
  }

  updateUrl(rootPathSegment: string, queryParams: string): void {
    const newUrl = rootPathSegment + queryParams;
    this.location.replaceState(newUrl);
  }

  fetchDropDownOptions(): void {
    if (this.wantProject) { this.getProjects(); }
    if (this.wantCompany) { this.getCompanies(); }
    if (this.wantBoq) { this.getBoqs(); }

    if (this.wantBaseCountry) { this.getBaseCountries(); }
    if (this.wantBaseLot) { this.getBaseLots(); }
    if (this.wantBaseTrade) { this.getBaseTrades(); }
    
    if (this.wantBaseCompanyCountry) { this.getBaseCompanyCountries(); }
    if (this.wantBaseCompanyLot) { this.getBaseCompanyLots(); }
    if (this.wantBaseCompanyTrade) { this.getBaseCompanyTrades(); }

    if (this.wantCountry) { this.getCountries(); }
    if (this.wantLot) { this.getLots(); }
    if (this.wantTrade) { this.getTrades(); }
  }

  patchQueryParamsIntoForm(): void {
    this.snapshotQueryParams = this.route.snapshot.queryParams;
    if (this.snapshotQueryParams.search) {
      this.filterSearchForm.controls['search'].setValue(this.snapshotQueryParams.search);
    }
    if (this.snapshotQueryParams.company) {
      const companyId: number = Number(this.snapshotQueryParams.company);
      this.filterSearchForm.controls['company'].setValue(companyId);
    }
    if (this.snapshotQueryParams.project) {
      const projectId: number = Number(this.snapshotQueryParams.project);
      this.filterSearchForm.controls['project'].setValue(projectId);
    }
    if (this.snapshotQueryParams.country) {
      const countryId: number = Number(this.snapshotQueryParams.country);
      this.filterSearchForm.controls['country'].setValue(countryId);
    }
    if (this.snapshotQueryParams.lot) {
      const lotId: number = Number(this.snapshotQueryParams.lot);
      this.filterSearchForm.controls['lot'].setValue(lotId);
    }
    if (this.snapshotQueryParams.trade) {
      const tradeId: number = Number(this.snapshotQueryParams.trade);
      this.filterSearchForm.controls['trade'].setValue(tradeId);
    }
    if (this.snapshotQueryParams.boq) {
      const boqId: number = Number(this.snapshotQueryParams.boq);
      this.filterSearchForm.controls['boq'].setValue(boqId);
    }
  }


  
  // BASE
  
  getBaseTrades(queryParams?: string): void {
    this.baseTradeService.getBaseTrades(queryParams).subscribe({
      next: (paginatedBaseTrade: Paginated<BaseTrade>) => {
        console.log("Successfully fetched Base Trades.");
        console.log(paginatedBaseTrade);
        this.trades = paginatedBaseTrade.results!;
      }, 
      error: (err: any) => {
        console.log("Failed to fetch Base Trades.");
        console.log(err);
      }
    });
  }

  getBaseLots(queryParams?: string): void {
    this.baseLotService.getBaseLots(queryParams).subscribe({
      next: (paginatedBaseLot: Paginated<BaseLot>) => {
        console.log("Successfully fetched Base Lots.");
        console.log(paginatedBaseLot);
        this.lots = paginatedBaseLot.results!;
      }, 
      error: (err: any) => {
        console.log("Failed to fetch Base Lots.");
        console.log(err);
      }
    });
  }

  getBaseCountries(queryParams?: string): void {
    this.baseCountryService.getBaseCountries(queryParams).subscribe({
      next: (paginatedBaseCountry: Paginated<BaseCountry>) => {
        console.log("Successfully fetched Base Countries.");
        console.log(paginatedBaseCountry);
        this.countries = paginatedBaseCountry.results!;
      }, 
      error: (err: any) => {
        console.log("Failed to fetch Base Countries.");
        console.log(err);
      }
    });
  }

  getCompanies(queryParams?: string): void {
    this.companyService.getCompanies(queryParams).subscribe({
      next: (paginatedCompany: Paginated<Company>) => {
        console.log("Successfully fetched Companies.");
        console.log(paginatedCompany);
        this.companies = paginatedCompany.results!;
      }, 
      error: (err: any) => {
        console.log("Failed to fetch Companies.");
        console.log(err);
      }
    });
  } 

  // BASE COMPANY
  
  getBaseCompanyTrades(queryParams?: string): void {
    this.baseCompanyTradeService.getBaseCompanyTrades(queryParams).subscribe({
      next: (paginatedBaseCompanyTrade: Paginated<BaseCompanyTrade>) => {
        console.log("Successfully fetched Base Company Trades.");
        console.log(paginatedBaseCompanyTrade);
        this.trades = paginatedBaseCompanyTrade.results!;
      }, 
      error: (err: any) => {
        console.log("Failed to fetch Base Company Trades.");
        console.log(err);
      }
    });
  }

  getBaseCompanyLots(queryParams?: string): void {
    this.baseCompanyLotService.getBaseCompanyLots(queryParams).subscribe({
      next: (paginatedBaseCompanyLot: Paginated<BaseCompanyLot>) => {
        console.log("Successfully fetched Base Company Lots.");
        console.log(paginatedBaseCompanyLot);
        this.lots = paginatedBaseCompanyLot.results!;
      }, 
      error: (err: any) => {
        console.log("Failed to fetch Base Company Lots.");
        console.log(err);
      }
    });
  }

  getBaseCompanyCountries(queryParams?: string): void {
    this.baseCompanyCountryService.getBaseCompanyCountries(queryParams).subscribe({
      next: (paginatedBaseCompanyCountry: Paginated<BaseCompanyCountry>) => {
        console.log("Successfully fetched Base Company Countries.");
        console.log(paginatedBaseCompanyCountry);
        this.countries = paginatedBaseCompanyCountry.results!;
      }, 
      error: (err: any) => {
        console.log("Failed to fetch Base Company Countries.");
        console.log(err);
      }
    });
  }

  getProjects(queryParams?: string): void {
    this.projectService.getProjects(queryParams).subscribe({
      next: (paginatedProject: Paginated<Project>) => {
        console.log("Successfully fetched Base Projects.");
        console.log(paginatedProject);
        this.projects = paginatedProject.results!;
      }, 
      error: (err: any) => {
        console.log("Failed to fetch Base Projects.");
        console.log(err);
      }
    });
  } 

  // SMETA
  getBoqs(queryParams?: string): void {
    this.boqService.getBoqs(queryParams).subscribe({
      next: (paginatedBoq: Paginated<Boq>) => {
        console.log("Successfully fetched Trades.");
        console.log(paginatedBoq);
        this.boqs = paginatedBoq.results!;
      }, 
      error: (err: any) => {
        console.log("Failed to fetch Trades.");
        console.log(err);
      }
    });
  }

  getTrades(queryParams?: string): void {
    this.tradeService.getTrades(queryParams).subscribe({
      next: (paginatedTrade: Paginated<Trade>) => {
        console.log("Successfully fetched Trades.");
        console.log(paginatedTrade);
        this.trades = paginatedTrade.results!;
      }, 
      error: (err: any) => {
        console.log("Failed to fetch Trades.");
        console.log(err);
      }
    });
  }

  getLots(queryParams?: string): void {
    this.lotService.getLots(queryParams).subscribe({
      next: (paginatedLot: Paginated<Lot>) => {
        console.log("Successfully fetched Lots.");
        console.log(paginatedLot);
        this.lots = paginatedLot.results!;
      }, 
      error: (err: any) => {
        console.log("Failed to fetch Lots.");
        console.log(err);
      }
    });
  }

  getCountries(queryParams?: string): void {
    this.countryService.getCountries(queryParams).subscribe({
      next: (paginatedCountry: Paginated<Country>) => {
        console.log("Successfully fetched Countries.");
        console.log(paginatedCountry);
        this.countries = paginatedCountry.results!;
      }, 
      error: (err: any) => {
        console.log("Failed to fetch Countries.");
        console.log(err);
      }
    });
  }

}