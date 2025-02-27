import { redis } from "../redis/client";

interface AccessInviteLinkParams {
  subscriberId: string;
}

export async function accessInviteLink({
  subscriberId,
}: AccessInviteLinkParams) {
  const result = await redis.hincrby("referral:access-count", subscriberId, 1);
}
