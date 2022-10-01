import { createHash } from "crypto";
import { hashBlock } from "./utils/helpers";

export interface Block {
     header: {
        nonce: number,
        hashBlock: string
     },
     payLoad: {
        sequence: number,
        timeStamp: number,
        data: any,
        previousHash: string
     }
}

export class Blockchain {
    #chain: Block[] = [];
    private PowPrefix = '0';

    constructor(private readonly difficulty: number = 4) {
        this.#chain.push(this.generateGenesis())
    }

    private generateGenesis(): Block {
        const payLoad:Block['payLoad'] = {
            sequence: 0,
            timeStamp: + new Date(),
            data: 'Initial Block',
            previousHash: ''
        }

        return {
            header: {
                nonce:0,
                hashBlock: hashBlock(JSON.stringify(payLoad))
            },
            payLoad
        }
    }
}