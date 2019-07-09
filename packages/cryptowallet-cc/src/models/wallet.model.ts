import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class Wallet extends ConvectorModel<Wallet> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.wallet';

  @Required()
  @Validate(yup.string())
  public ownerID: string;

  @Required()
  @Validate(yup.string())
  public ownerName: string;

  @Required()
  @Validate(yup.number()
    .integer()
    .min(0)
  )
  public balance: number = 0;

  public transactionDetails: Array<{
    sender: string,
    receiver: string,
    amount: number,
    creationDate: Date,
    content: string
  }> = new Array();
}
