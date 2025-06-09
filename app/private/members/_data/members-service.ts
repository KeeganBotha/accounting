import { membersMapper } from "./members-mapper";
import { membersProvider } from "./members-provider";

export function membersService(serverCtx: ServerCtxType) {
  const _provider = membersProvider(serverCtx);

  async function getMembers(search: string) {
    const rawResult = await _provider.getMembers(search);
    const result = membersMapper(rawResult);

    return result;
  }

  async function mutateMember(input: any) {
    const result = await _provider.mutateMember(input);

    return result;
  }

  async function deleteMember(id: number) {
    const result = await _provider.deleteMember(id);

    return result;
  }

  return {
    getMembers,
    mutateMember,
    deleteMember,
  };
}
