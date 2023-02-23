import { ConfigModule, ConfigService } from 'nestjs-dotenv'

export class DotEnvConfigModule extends ConfigModule { }
export class DotEnvConfigService extends ConfigService { }