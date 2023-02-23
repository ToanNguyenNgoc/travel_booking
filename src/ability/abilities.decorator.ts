import { SetMetadata } from "@nestjs/common"
import { User } from "../user/entities/user.entity"
import { Action, Subject } from './ability.factory/ability.factory'

export interface RequirementsRule {
    action: Action;
    subject: Subject;
}

export const CHECK_ABILITY_KEY = 'CHECK_ABILITY_KEY'

export const CheckAbilities = (...requirements: RequirementsRule[]) => SetMetadata(CHECK_ABILITY_KEY, requirements)

export class ReadUserAbility implements RequirementsRule {
    action: Action.Read;
    subject: User;
}