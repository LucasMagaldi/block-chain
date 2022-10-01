import { BinaryLike, createHash } from "crypto";

export function hashBlock(data: BinaryLike):string {
    return createHash('sha56').update(data).digest("hex")
}