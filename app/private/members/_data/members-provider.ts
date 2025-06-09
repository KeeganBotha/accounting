import { _db } from "@/database/db";

export function membersProvider(serverCtx: ServerCtxType) {
  async function getMembers(search: string) {
    const result = await _db.member.findMany({
      where: {
        OR: [
          {
            first_name: {
              contains: search,
              mode: "insensitive",
            },
            last_name: {
              contains: search,
              mode: "insensitive",
            },
            middle_name: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    return result;
  }

  async function mutateMember(input: any) {
    const result = true;

    return result;
  }

  async function deleteMember(id: number) {
    const result = true;

    return result;
  }

  return {
    getMembers,
    mutateMember,
    deleteMember,
  };
}
