import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePropertyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}