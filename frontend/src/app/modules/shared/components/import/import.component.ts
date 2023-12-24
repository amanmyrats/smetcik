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

    private baseCompanyunitService: BaseCompanyUnitService, 
    private baseCompanyTradeService: BaseCompanyTradeService,
    private baseCompanyLotService: BaseCompanyLotService, 
    private baseCompanyCountryService: BaseCompanyCountryService, 
    private baseCompanyCurrencyService: BaseCompanyCurrencyService, 
    private baseCompanyBoqItemService: BaseCompanyBoqItemService, 
    private baseCompanyResourceService: BaseCompanyResourceService,
    private baseCompanyConsumptionService: BaseCompanyConsumptionService, 
    
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
          
          break;
        case 'basetrade':
          
          break;
        case 'baselot':
          
          break;
        case 'basecountry':
          
          break;
        case 'basecurrency':
          
          break;
        case 'baseboqitem':
          this.baseBoqItemImportFromExcel(formData);
          break;
        case 'baseresource':
          
          break;
        case 'baseconsumption':
          
          break;
        case 'basecompanyunit':
          
          break;
        case 'basecompanytrade':
          
          break;
        case 'basecompanylot':
          
          break;
        case 'basecompanycountry':
          
          break;
        case 'basecompanycurrency':
          
          break;
        case 'basecompanyboqitem':
          
          break;
        case 'basecompanyresource':
          
          break;
        case 'basecompanyconsumption':
          
          break;
        case 'unit':
          
          break;
        case 'trade':
          
          break;
        case 'lot':
          
          break;
        case 'country':
          
          break;
        case 'currency':
          
          break;
        case 'boqitem':
          
          break;
        case 'resource':
          this.resourceImportFromExcel(formData);
          break;
        case 'consumption':
          
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

  }

  baseTradeImportFromExcel(formData: FormData): void {

  }

  baseLotImportFromExcel(formData: FormData): void {

  }

  baseCountryImportFromExcel(formData: FormData): void {

  }

  baseCurrencyImportFromExcel(formData: FormData): void {

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

  }

  baseConsumptionImportFromExcel(formData: FormData): void {

  } 

  // BASE COMPANY
  
  baseCompanyUnitImportFromExcel(formData: FormData): void {

  }

  baseCompanyTradeImportFromExcel(formData: FormData): void {

  }

  baseCompanyLotImportFromExcel(formData: FormData): void {

  }

  baseCompanyCountryImportFromExcel(formData: FormData): void {

  }

  baseCompanyCurrencyImportFromExcel(formData: FormData): void {

  }

  baseCompanyBoqItemImportFromExcel(formData: FormData): void {

  }

  baseCompanyResourceImportFromExcel(formData: FormData): void {

  }

  baseCompanyConsumptionImportFromExcel(formData: FormData): void {

  } 

  // SMETA
  unitImportFromExcel(formData: FormData): void {

  }

  tradeImportFromExcel(formData: FormData): void {

  }

  lotImportFromExcel(formData: FormData): void {

  }

  countryImportFromExcel(formData: FormData): void {

  }

  currencyImportFromExcel(formData: FormData): void {

  }

  boqItemImportFromExcel(formData: FormData): void {

  }

  resourceImportFromExcel(formData: FormData): void {
    this.resourceService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Imported successfully");
        console.log(data);
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import");
        console.log(err);
      }
    });
  }

  consumptionImportFromExcel(formData: FormData): void {

  }

}
