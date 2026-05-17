import dotenv from "dotenv";

dotenv.config();

interface Config{
    PORT: number | string;
    DATABASE_URL: string;
    JWt_SECRETE: string;
    RABITMQ_URL: string;
}

const config: Config = {
    PORT :process.env.PORT || 3000,
    DATABASE_URL: process.env.DATABASE_URL || "",
    JWt_SECRETE: process.env.JWt_SECRETE || "changeme",
    RABITMQ_URL: process.env.RABITMQ_URL || "amqp://localhost:5672"
}

export default config;