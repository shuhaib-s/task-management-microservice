import dotenv from "dotenv";

dotenv.config();

interface Config{
    PORT: number | string;
    DATABASE_URL: string;
    JWt_SECRETE: string;
}

const config: Config = {
    PORT :process.env.PORT || 3000,
    DATABASE_URL: process.env.DATABASE_URL || "",
    JWt_SECRETE: process.env.JWt_SECRETE || "changeme"
}

export default config;