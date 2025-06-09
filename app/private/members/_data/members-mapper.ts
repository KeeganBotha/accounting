import { membersProvider } from "./members-provider";

type MembersMapperType = Awaited<
  ReturnType<ReturnType<typeof membersProvider>["getMembers"]>
>;

export function membersMapper(input: MembersMapperType) {
  const result = input.map((i) => {
    return {
      name: i.first_name + " " + i.last_name,
      id: i.identity_number,
      expirationDate: i.expiration_date,
    };
  });

  return result;
}
