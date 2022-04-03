/*
import {Observable, Subject, takeUntil} from "rxjs";
import {OnDestroy} from "@angular/core";

export enum AlertType {
  ALERT = 'alert',
  NOTIFICATION = 'notification',
}

type ApiResponseHandler<T> = (result: T) => void;
type ApiPageResponseHandler<T> = (result: T, page: PaginationSortData) => void;

export interface ResolverExtras {
  /!**
   * Type of alert to display (notification / alert)
   * Defaults to notification if not set
   *!/
  alertType?: AlertType;

  /!**
   * Should alert be display on error
   * Default true
   *!/
  displayErrorAlert?: boolean;

  /!**
   * Message to display on success
   *!/
  successMessage?: string;

  /!**
   * Title to display on success
   * If success message is set defaults to generic success title
   *!/
  successTitle?: string;
}

export class MainComponent implements OnDestroy {
  private readonly ERROR_LOCALE_PATH = 'error';
  private readonly ERROR_LOCALE_TITLE = this.ERROR_LOCALE_PATH + '.errorTitle';

  unsubscribe: Subject<any> = new Subject<any>();

  @Select(AuthState.getAuthState) authStateSelector: Observable<AuthStateModel>;
  authState: AuthStateModel;

  constructor() {
    this.authStateSelector.pipe(takeUntil(this.unsubscribe)).subscribe(state => {
      this.authState = state;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  protected resolveApiResponse<T>(response: ApiResponse<T>, onSuccess: ApiResponseHandler<T>, extras: ResolverExtras = {}): void {
    if (this.isApiResponseSuccessful(response.error, extras)) {
      onSuccess(response.response);
    }
  }

  protected resolveApiPageResponse<T>(response: ApiPageResponse<T>, onSuccess: ApiPageResponseHandler<T>, extras: ResolverExtras = {}): void {
    if (this.isApiResponseSuccessful(response.error, extras)) {
      onSuccess(response.response, PaginationSortData.fromServerObject(response.pageObject));
    }
  }

  private isApiResponseSuccessful(error: ApiError, extras: ResolverExtras): boolean {
    if (error) {
      if (extras.displayErrorAlert !== false) {
        this.displayErrorAlert(error.messageKey, extras.alertType);
      }
      return false;
    } else {
      this.displaySuccessAlert(extras.successTitle, extras.successMessage, extras.alertType);
      return true;
    }
  }

  private displaySuccessAlert(alertTitle: string, alertMsg: string, alertType: AlertType): void {
    if (alertTitle || alertMsg) {
      alertTitle = this.generateSuccessTitleKey(alertTitle);

      if (alertType === AlertType.ALERT) {
        AlertProvider.successAlert(this.t.translate(alertTitle), this.t.translate(alertMsg));
      } else {
        NotificationProvider.successNotification(this.t.translate(alertTitle), this.t.translate(alertMsg));
      }
    }
  }

  private displayErrorAlert(errorMsg: string, alertType: AlertType): void {
    const errorKey = this.generateErrorKey(errorMsg);
    if (alertType === AlertType.ALERT) {
      AlertProvider.errorAlert(this.t.translate(this.ERROR_LOCALE_TITLE), this.t.translate(errorKey));
    } else {
      NotificationProvider.errorNotification(this.t.translate(this.ERROR_LOCALE_TITLE), this.t.translate(errorKey));
    }
  }


  private generateSuccessTitleKey(alertTitle: string): string {
    if (!alertTitle) {
      alertTitle = 'shared.alert.successTitle';
    }
    return alertTitle;
  }
}
*/
