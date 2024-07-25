import {NgModule} from '@angular/core';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {PageLoaderComponent} from './layout/page-loader/page-loader.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {RightSidebarComponent} from './layout/right-sidebar/right-sidebar.component';
import {AuthLayoutComponent} from './layout/app-layout/auth-layout/auth-layout.component';
import {MainLayoutComponent} from './layout/app-layout/main-layout/main-layout.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {fakeBackendProvider} from './core/interceptor/fake-backend';
import {ErrorInterceptor} from './core/interceptor/error.interceptor';
import {JwtInterceptor} from './core/interceptor/jwt.interceptor';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {
    HttpClientModule,
    HTTP_INTERCEPTORS,
    HttpClient,
} from '@angular/common/http';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getAnalytics, provideAnalytics} from "@angular/fire/analytics";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {getDatabase, provideDatabase} from "@angular/fire/database";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {EditLocationComponent} from './edit-location/edit-location.component';
import {EditLanguangeComponent} from './edit-languange/edit-languange.component';
import {EditTagComponent} from './edit-tag/edit-tag.component';
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {getFunctions, provideFunctions} from "@angular/fire/functions";
import {environment} from "../environments/environment";
import {TypesComponent} from "./contacts/types/types/types.component";
import {PrettyJsonModule} from "@stg-247/ngx-prettyjson";


export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PageLoaderComponent,
        SidebarComponent,
        RightSidebarComponent,
        AuthLayoutComponent,
        MainLayoutComponent,
        EditLocationComponent,
        EditLanguangeComponent,
        EditTagComponent,

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        LoadingBarRouterModule,
        PrettyJsonModule,
        NgScrollbarModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAnalytics(() => getAnalytics()),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
        provideFirestore(() => getFirestore()),
        provideAnalytics(() => getAnalytics()),
        // AngularFireFunctionsModule,
        provideFunctions(() => getFunctions()),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
        }),
        CoreModule,
        SharedModule,

    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: FIREBASE_OPTIONS, useValue: environment.firebase},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        fakeBackendProvider,
    ],
    bootstrap: [AppComponent],

})
export class AppModule {
}
