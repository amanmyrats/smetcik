import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { ResourceService } from 'src/app/modules/smeta/services/resource.service';
import { UnitService } from 'src/app/modules/common/services/unit.service';
import { TradeService } from 'src/app/modules/common/services/trade.service';
import { LotService } from 'src/app/modules/common/services/lot.service';
import { CountryService } from 'src/app/modules/smeta/services/country.service';
import { CurrencyService } from 'src/app/modules/smeta/services/currency.service';
import { BoqItemService } from 'src/app/modules/smeta/services/boq-item.service';
import { ConsumptionService } from 'src/app/modules/smeta/services/consumption.service';
import { BaseUnitService } from 'src/app/modules/admin/services/base-unit.service';
import { BaseTradeService } from 'src/app/modules/admin/services/base-trade.service';
import { BaseLotService } from 'src/app/modules/admin/services/base-lot.service';
import { BaseCountryService } from 'src/app/modules/admin/services/base-country.service';
import { BaseCurrencyService } from 'src/app/modules/admin/services/base-currency.service';
import { BaseBoqItemService } from 'src/app/modules/admin/services/base-boq-item.service';
import { BaseResourceService } from 'src/app/modules/admin/services/base-resource.service';
import { BaseConsumptionService } from 'src/app/modules/admin/services/base-consumption.service';
import { BaseCompanyUnitService } from 'src/app/modules/company/services/base-company-unit.service';
import { BaseCompanyTradeService } from 'src/app/modules/company/services/base-company-trade.service';
import { BaseCompanyLotService } from 'src/app/modules/company/services/base-company-lot.service';
import { BaseCompanyCountryService } from 'src/app/modules/company/services/base-company-country.service';
import { BaseCompanyCurrencyService } from 'src/app/modules/company/services/base-company-currency.service';
import { BaseCompanyBoqItemService } from 'src/app/modules/company/services/base-company-boq-item.service';
import { BaseCompanyResourceService } from 'src/app/modules/company/services/base-company-resource.service';
import { BaseCompanyConsumptionService } from 'src/app/modules/company/services/base-company-consumption.service';
import { CompanyService } from 'src/app/modules/company/services/company.service';
import { ProjectService } from 'src/app/modules/company/services/project.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit{
  
  @ViewChild('fileUpload', {static: false}) fileUpload: FileUpload;
  @Input() whichResource: string;
  
  fileSelected: File | null = null;
  
  constructor(
    private baseUnitService: BaseUnitService, 
    private baseTradeService: BaseTradeService,
    private baseLotService: BaseLotService, 
    private baseCountryService: BaseCountryService, 
    private baseCurrencyService: BaseCurrencyService, 
    private baseBoqItemService: BaseBoqItemService, 
    private baseResourceService: BaseResourceService,
    private baseConsumptionService: BaseConsumptionService, 
    private companyService: CompanyService, 

    private baseCompanyUnitService: BaseCompanyUnitService, 
    private baseCompanyTradeService: BaseCompanyTradeService,
    private baseCompanyLotService: BaseCompanyLotService, 
    private baseCompanyCountryService: BaseCompanyCountryService, 
    private baseCompanyCurrencyService: BaseCompanyCurrencyService, 
    private baseCompanyBoqItemService: BaseCompanyBoqItemService, 
    private baseCompanyResourceService: BaseCompanyResourceService,
    private baseCompanyConsumptionService: BaseCompanyConsumptionService, 
    private projectService: ProjectService, 
    
    private unitService: UnitService, 
    private tradeService: TradeService,
    private lotService: LotService, 
    private countryService: CountryService, 
    private currencyService: CurrencyService, 
    private boqItemService: BoqItemService, 
    private resourceService: ResourceService,
    private consumptionService: ConsumptionService, 

  ){

  }


  ngOnInit(): void {
    
  }

  onUserSelect(event: any): void {
    this.fileSelected = event.files && event.files.length > 0 ? event.files[0] : null;
  }

  onClearSelectionClick(): void {
    this.fileSelected = null;
    this.fileUpload.clear();
  }

  onImport(): void {
    if (this.fileSelected != null) {

      var formData: FormData = new FormData();
      formData.append('excel', this.fileSelected);
      
      switch(this.whichResource) {
        case 'baseunit':
          this.baseUnitImportFromExcel(formData);
          break;
        case 'basetrade':
          this.baseTradeImportFromExcel(formData);
          break;
        case 'baselot':
          this.baseLotImportFromExcel(formData);
          break;
        case 'basecountry':
          this.baseCountryImportFromExcel(formData);
          break;
        case 'basecurrency':
          this.baseCurrencyImportFromExcel(formData);
          break;
        case 'baseboqitem':
          this.baseBoqItemImportFromExcel(formData);
          break;
        case 'baseresource':
          this.baseResourceImportFromExcel(formData);
          break;
        case 'baseconsumption':
          this.baseConsumptionImportFromExcel(formData);
          break;
        case 'company':
          this.companyImportFromExcel(formData);
          break;
        case 'basecompanyunit':
          this.baseCompanyUnitImportFromExcel(formData);
          break;
        case 'basecompanytrade':
          this.baseCompanyTradeImportFromExcel(formData);
          break;
        case 'basecompanylot':
          this.baseCompanyLotImportFromExcel(formData);
          break;
        case 'basecompanycountry':
          this.baseCompanyCountryImportFromExcel(formData);
          break;
        case 'basecompanycurrency':
          this.baseCompanyCurrencyImportFromExcel(formData);
          break;
        case 'basecompanyboqitem':
          this.baseCompanyBoqItemImportFromExcel(formData);
          break;
        case 'basecompanyresource':
          this.baseCompanyResourceImportFromExcel(formData);
          break;
        case 'basecompanyconsumption':
          this.baseCompanyConsumptionImportFromExcel(formData);
          break;
        case 'project':
          this.projectImportFromExcel(formData);
          break;
        case 'unit':
          this.unitImportFromExcel(formData);
          break;
        case 'trade':
          this.tradeImportFromExcel(formData);
          break;
        case 'lot':
          this.lotImportFromExcel(formData);
          break;
        case 'country':
          this.countryImportFromExcel(formData);
          break;
        case 'currency':
          this.currencyImportFromExcel(formData);
          break;
        case 'boqitem':
          this.boqItemImportFromExcel(formData);
          break;
        case 'resource':
          this.resourceImportFromExcel(formData);
          break;
        case 'consumption':
          this.consumptionImportFromExcel(formData);
          break;
        default:
          console.log("whichResource does not match any case.");
      }
    } else {
      console.log("Excel file is not selected.");
    }
  }

  // BASE
  
  baseUnitImportFromExcel(formData: FormData): void {
    this.baseUnitService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Base Units.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Base Units.");
        console.log(err);
      }
    });
  }

  baseTradeImportFromExcel(formData: FormData): void {
    this.baseTradeService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Base Trades.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Base Trades.");
        console.log(err);
      }
    });
  }

  baseLotImportFromExcel(formData: FormData): void {
    this.baseLotService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Base Lots.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Base Lots.");
        console.log(err);
      }
    });
  }

  baseCountryImportFromExcel(formData: FormData): void {
    this.baseCountryService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Base Countries.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Base Countries.");
        console.log(err);
      }
    });
  }

  baseCurrencyImportFromExcel(formData: FormData): void {
    this.baseCurrencyService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Base Currencies.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Base Currencies.");
        console.log(err);
      }
    });
  }

  baseBoqItemImportFromExcel(formData: FormData): void {
    this.baseBoqItemService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Base BOQ Items.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Base Boq Items.");
        console.log(err);
      }
    });
  }

  baseResourceImportFromExcel(formData: FormData): void {
    this.baseResourceService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Base Resources.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Base Resources.");
        console.log(err);
      }
    });
  }

  baseConsumptionImportFromExcel(formData: FormData): void {
    this.baseConsumptionService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Base Consumptions.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Base Consumptions.");
        console.log(err);
      }
    });
  } 

  companyImportFromExcel(formData: FormData): void {
    this.companyService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Companies.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Companies.");
        console.log(err);
      }
    });
  } 

  // BASE COMPANY
  
  baseCompanyUnitImportFromExcel(formData: FormData): void {
    this.baseCompanyUnitService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Base Company Units.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Base Company Units.");
        console.log(err);
      }
    });
  }

  baseCompanyTradeImportFromExcel(formData: FormData): void {
    this.baseCompanyTradeService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Base Company Trades.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Base Company Trades.");
        console.log(err);
      }
    });
  }

  baseCompanyLotImportFromExcel(formData: FormData): void {
    this.baseCompanyLotService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Base Company Lots.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Base Company Lots.");
        console.log(err);
      }
    });
  }

  baseCompanyCountryImportFromExcel(formData: FormData): void {
    this.baseCompanyCountryService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Base Company Countries.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Base Company Countries.");
        console.log(err);
      }
    });
  }

  baseCompanyCurrencyImportFromExcel(formData: FormData): void {
    this.baseCompanyCurrencyService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Base Company Currencies.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Base Company Currencies.");
        console.log(err);
      }
    });
  }

  baseCompanyBoqItemImportFromExcel(formData: FormData): void {
    this.baseCompanyBoqItemService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Base Company BoqItems.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Base Company BoqItems.");
        console.log(err);
      }
    });
  }

  baseCompanyResourceImportFromExcel(formData: FormData): void {
    this.baseCompanyResourceService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Base Company Resources.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Base Company Resources.");
        console.log(err);
      }
    });
  }

  baseCompanyConsumptionImportFromExcel(formData: FormData): void {
    this.baseCompanyConsumptionService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Base Company Consumptions.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Base Company Consumptions.");
        console.log(err);
      }
    });
  } 

  projectImportFromExcel(formData: FormData): void {
    this.projectService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Base Projects.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Base Projects.");
        console.log(err);
      }
    });
  } 

  // SMETA
  unitImportFromExcel(formData: FormData): void {
    this.unitService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Units.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Units.");
        console.log(err);
      }
    });
  }

  tradeImportFromExcel(formData: FormData): void {
    this.tradeService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Trades.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Trades.");
        console.log(err);
      }
    });
  }

  lotImportFromExcel(formData: FormData): void {
    this.lotService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Lots.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Lots.");
        console.log(err);
      }
    });
  }

  countryImportFromExcel(formData: FormData): void {
    this.countryService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Countries.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Countries.");
        console.log(err);
      }
    });
  }

  currencyImportFromExcel(formData: FormData): void {
    this.currencyService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Currencies.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Currencies.");
        console.log(err);
      }
    });
  }

  boqItemImportFromExcel(formData: FormData): void {
    this.boqItemService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported BOQ Items.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import BOQ Items.");
        console.log(err);
      }
    });
  }

  resourceImportFromExcel(formData: FormData): void {
    this.resourceService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Resources.");
        console.log(data);
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Consumptions.");
        console.log(err);
      }
    });
  }

  consumptionImportFromExcel(formData: FormData): void {
    this.consumptionService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Successfully imported Consumptions.");
        console.log(data)
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import Consumptions.");
        console.log(err);
      }
    });
  }

}
