import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private baseMediaUrl = `${env.apiUrl}/media/`;
  private baseBase64ImageUrl = `/api/v1/base64image`;
  private imageSubPaths: { [key: string]: any } = {
    'materialcard': 'materialcard/images/',
    'material': 'material/images/', 
    'inventoryitem': 'inventoryitem/images/', 
    'room': 'room/plans/', 
    
  };

  private fileSubPaths: { [key: string]: any } = {
    'materialcardadditionaldocuments': 'materialcard/additionaldocuments/',
    'materialcardsigned': 'materialcard/signed/',
    'materialcardextraimages': 'materialcard/extraimages/',
    'materialcardattachments': 'materialcard/attachments/',

    'inventoryitemextraimages': 'inventoryitem/extraimages/',
    'inventoryitemadditionaldocuments': 'inventoryitem/additionaldocuments/',
    
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  getImageUrl(imageName: string, entityType: string): string {
    return this.baseMediaUrl + this.imageSubPaths[entityType] + imageName;
  }

  getFileUrl(fileName: string, entityType: string): string {
    return this.baseMediaUrl + this.fileSubPaths[entityType] + fileName;
  }

  getBase64ImageUrl(imageName: string): Observable<string> {
    // http://localhost:8080/api/v1/base64image/
     // Encode the image name for URLs
     const encodedImageName = encodeURIComponent(imageName);

     // Construct the complete URL with the encoded image name
     const imageUrl = `${env.apiUrl}${this.baseBase64ImageUrl}/${encodedImageName}`;
 
     // Make an HTTP GET request to fetch the image
     return this.httpClient.get(imageUrl, { responseType: 'text' });
  }
}