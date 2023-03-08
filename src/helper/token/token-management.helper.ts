import jwt from "jsonwebtoken"

export class TokenManagementHelper {

    static async generateToken(props: TokenManagementHelper.TokenInfo): Promise<string>{
        const token = jwt.sign(props, process.env.JWT_TOKEN_SECRET, {
            expiresIn: "1h"
        })
        return token
    }

    static async verifyToken(token: string): Promise<TokenManagementHelper.TokenInfo | null> {
        try {
            const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET) as TokenManagementHelper.TokenInfo
            return decoded
        } catch (err) {
            return null;
        }
    }

    static async generateRefreshToken(props: TokenManagementHelper.TokenInfo): Promise<string>{
        const refreshToken = jwt.sign(props, process.env.JWT_REFRESH_TOKEN_SECRET, {
            expiresIn: "2w"
        })
        return refreshToken
    }

    static async verifyRefreshToken(refreshToken: string): Promise<TokenManagementHelper.TokenInfo | null> {
        try {
            const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET) as TokenManagementHelper.TokenInfo
            return decoded
        } catch (err) {
            return null;
        }
    }

    static async invalidateRefreshToken(refreshToken: string): Promise<void> {

    }
}

export namespace TokenManagementHelper {
    export type TokenInfo = {
        userId: string
        email: string
    }
}