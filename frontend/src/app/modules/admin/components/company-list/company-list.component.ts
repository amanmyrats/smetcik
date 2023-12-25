import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { Company } from 'src/app/modules/company/models/company.model';
import { CompanyService } from 'src/app/modules/company/services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent  implements OnInit {

  companies: Company[];
  companyToEdit: Company | null = null;
  showCompanyForm: boolean = false;
  showCompanyImportForm: boolean = false;

  constructor(
    private companyService: CompanyService, 
  ){}

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(queryParams?: string): void {
    this.companyService.getCompanies(queryParams).subscribe({
      next: (paginatedCompanies: Paginated<Company>) => {
        this.companies = paginatedCompanies.results!;
        console.log("Successfully fetched Companies.");
        console.log(paginatedCompanies.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching Companies");
        console.log(err);
      }
    });
  }

  deleteCompany(id: string): void {
    this.companyService.deleteCompany(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted Company.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting Company");
        console.log(err);
      }
    });
  }
  
  openCreateCompanyForm(): void {
    this.companyToEdit = null;
    this.showCompanyForm = true;
  }

  openUpdateCompanyForm(companyToEdit: Company): void {
    this.companyToEdit = companyToEdit;
    this.showCompanyForm = true;
  }
  
  handleCompanyFormCloseEvent(baseBoqItem: Company | null): void {
    console.log("received:");
    console.log(baseBoqItem);
    // this.updateTrades(null, null, baseBoqItem);
    this.getCompanies();
    this.showCompanyForm = false;
  }

  exportExcel(): void {
    this.companyService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported Companies.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'companies.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting Companies");
        console.log(err);
      }
    });
  }

  openCompanyImportForm(): void {
    this.showCompanyImportForm = true;
  }

  handleCompanyImportFormCloseEvent(): void {
    this.getCompanies();
    this.showCompanyImportForm = false;
  }

}