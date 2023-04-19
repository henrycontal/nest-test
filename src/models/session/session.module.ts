import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Session, SessionSchema } from './schemas/session.schema';
import { SessionRepository } from './session.repository';
import { SessionService } from './session.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Session.name, schema: SessionSchema },
        ]),
    ],
    providers: [SessionService, SessionRepository],
    exports: [SessionService],
})
export class SessionModule {}