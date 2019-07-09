import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class Admin extends ConvectorModel<Admin> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.admin';

  @Required()
  @Validate(yup.string())
  public name:string;

  @Required()
  @Validate(yup.string())
  public email: string;

  @ReadOnly()
  @Required()
  @Validate(yup.number())
  public role: string = 'Admin';
}
