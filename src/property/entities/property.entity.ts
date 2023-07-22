import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Property {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
