import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class Moderator extends ConvectorModel<Moderator> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.moderator';

  @Required()
  @Validate(yup.string())
  public name: string

  @Required()
  @Validate(yup.string())
  public email: string

  @Validate(yup.string())
  public walletID: string

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public readonly role: string = 'Moderator';
}
