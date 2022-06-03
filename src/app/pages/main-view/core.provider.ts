import {Injectable} from "@angular/core";

export interface SiteConfig {
  fontSize: number
  fontColor: string;
}

@Injectable({providedIn: 'root'})
export class CoreProvider {

  setSiteConfig(data: SiteConfig) {
    const jsonData = JSON.stringify(data)
    localStorage.setItem('sc', jsonData)
  }

  getSiteConfig(): SiteConfig {
    if (localStorage.getItem('sc')) {
      return JSON.parse(localStorage.getItem('sc')!) as SiteConfig
    }
    return {fontColor: 'black', fontSize: 12};
  }

  removeSiteConfigData() {
    localStorage.removeItem('sc')
  }

}
