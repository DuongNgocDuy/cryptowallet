import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class Moderator extends ConvectorModel<Moderator> {
    readonly type: string;
    name: string;
    email: string;
    walletID: string;
    readonly role: string;
}
