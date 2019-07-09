import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class Trader extends ConvectorModel<Trader> {
    readonly type: string;
    name: string;
    email: string;
    walletID: string;
    readonly role: string;
}
