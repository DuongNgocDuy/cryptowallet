import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class Wallet extends ConvectorModel<Wallet> {
    readonly type: string;
    ownerID: string;
    ownerName: string;
    balance: number;
    transactionDetails: Array<{
        transactionID: string;
        sender: string;
        receiver: string;
        amount: number;
        creationDate: Date;
        content: string;
    }>;
}
