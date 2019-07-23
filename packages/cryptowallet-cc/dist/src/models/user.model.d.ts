import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class User extends ConvectorModel<User> {
    readonly type: string;
    name: string;
    email: string;
    walletID: string;
}
