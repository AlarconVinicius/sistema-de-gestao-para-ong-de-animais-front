import { ApiResponse } from "../models/ApiModels"
import { AuthData, Claim } from "../models/AuthModels"
class LocalStorageUtils {

    saveLocalUserData(response: ApiResponse<AuthData>) {
        this.saveUserToken(response.data.accessToken);
        this.saveUserTokenExpire(response.data.expiresIn);
        this.saveUserId(response.data.userToken.id);
        this.saveTenantId(response.data.userToken.claims);
        this.saveUserClaims(response.data.userToken.claims);
    }

    clearLocalUserData() {
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        localStorage.removeItem('expiresIn');
        localStorage.removeItem('claims');
        localStorage.removeItem('tenantId');
    }

    getUser(): Record<string, unknown> {
        return JSON.parse(localStorage.getItem('user') || '{}');
    }

    getUserToken(): string {
        return localStorage.getItem('token') || '';
    }

    getUserTokenExpire(): number | null {
        const expirationTime = localStorage.getItem('expiresIn');
        return expirationTime ? parseInt(expirationTime, 10) : null;
    }

    getUserId(): string {
        return localStorage.getItem('id') || '';
    }

    getUserClaims(): Claim[] {
        const claimsString = localStorage.getItem('claims') || '[]';
        return JSON.parse(claimsString) as Claim[];
    }

    saveTenantId(claims: Claim[]) {
        const tenantClaim = claims.find(claim => claim.type === 'Tenant');
        if (tenantClaim) {
            localStorage.setItem('tenantId', tenantClaim.value);
        }
    }

    getTenantId(): string {
        return localStorage.getItem('tenantId') || '';
    }

    saveUserToken(token: string) {
        localStorage.setItem('token', token);
    }

    saveUserTokenExpire(expiresIn: number) {
        const expirationTime = new Date().getTime() + expiresIn * 1000; // Adiciona o tempo de expiração
        localStorage.setItem('expiresIn', expirationTime.toString());
    }

    saveUserId(id: string) {
        localStorage.setItem('id', id);
    }

    saveUserClaims(claims: Claim[]) {
        localStorage.setItem('claims', JSON.stringify(claims));
    }

    hasClaim(type: string, value: string): boolean {
        const claims = this.getUserClaims();
        return claims.some(claim => claim.type === type && claim.value.includes(value));
    }

    isSuperAdmin(): boolean {
        return this.hasClaim('role', 'SuperAdmin');
    }

    isLoggedIn(): boolean {
        return Boolean(this.getUserToken());
    }

    isTokenExpired(): boolean {
        const expirationTime = this.getUserTokenExpire();
        if (!expirationTime) {
            return true;
        }
        return expirationTime < new Date().getTime();
    }
}

const localStorageUtils = new LocalStorageUtils();
export default localStorageUtils;


// class LocalStorageUtils {

//     saveLocalUserData(response) {
//         this.saveUserToken(response.accessToken);
//         this.saveUserTokenExpire(response.expiresIn);
//         this.saveUserId(response.userToken.id);
//         this.saveTenantId(response.userToken.claims);
//         this.saveUserClaims(response.userToken.claims);
//     }

//     clearLocalUserData() {
//         localStorage.removeItem('id');
//         localStorage.removeItem('token');
//         localStorage.removeItem('expiresIn');
//         localStorage.removeItem('claims');
//         localStorage.removeItem('tenantId');
//     }

//     getUser() {
//         return JSON.parse(localStorage.getItem('user') || '{}');
//     }

//     getUserToken() {
//         return localStorage.getItem('token') || '';
//     }

//     getUserTokenExpire() {
//         const expirationTime = localStorage.getItem('expiresIn');
//         return expirationTime ? parseInt(expirationTime, 10) : null;
//     }

//     getUserId() {
//         return localStorage.getItem('id') || '';
//     }

//     getUserClaims() {
//         const claimsString = localStorage.getItem('claims') || '[]';
//         return JSON.parse(claimsString);
//     }

//     saveTenantId(claims) {
//         const tenantClaim = claims.find(claim => claim.type === 'Tenant');
//         if (tenantClaim) {
//             localStorage.setItem('tenantId', tenantClaim.value);
//         }
//     }

//     getTenantId() {
//         return localStorage.getItem('tenantId') || '';
//     }

//     saveUserToken(token) {
//         localStorage.setItem('token', token);
//     }

//     saveUserTokenExpire(expiresIn) {
//         const expirationTime = expiresIn.getTime();
//         localStorage.setItem('expiresIn', expirationTime.toString());
//     }

//     saveUserId(id) {
//         localStorage.setItem('id', id);
//     }

//     saveUserClaims(claims) {
//         localStorage.setItem('claims', JSON.stringify(claims));
//     }

//     hasClaim(type, value) {
//         const claims = this.getUserClaims();
//         return claims.some(claim => claim.type === type && claim.value.includes(value));
//     }

//     isSuperAdmin() {
//         return this.hasClaim('role', 'SuperAdmin');
//     }

//     isLoggedIn() {
//         return Boolean(this.getUserToken());
//     }

//     isTokenExpired() {
//         const expirationTime = this.getUserTokenExpire();
//         if (!expirationTime) {
//             return true;
//         }
//         return expirationTime < new Date().getTime();
//     }
// }

// const localStorageUtils = new LocalStorageUtils();
// export default localStorageUtils;
