import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class User extends ConvectorModel<User> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.user';

  @Required()
  @Validate(yup.string())
  public name: string

  @Required()
  @Validate(yup.string())
  public email: string;

  @Validate(yup.string())
  public walletID: string;
}
