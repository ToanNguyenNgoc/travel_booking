import { Injectable } from "@nestjs/common";
import { Ability, AbilityBuilder, ExtractSubjectType, InferSubjects } from '@casl/ability'
import { User } from "../../user/entities/user.entity";

export enum Action {
    Manage = 'manage',
    Create = 'create',
    Update = 'update',
    Read = 'read',
    Delete = 'delete'
}

export type Subject = InferSubjects<typeof User> | 'all'
export type AppAbility = Ability<[Action, Subject]>;

@Injectable()
export class AbilityFactory {
    defineAbility(user: User) {
        const { can, cannot, build } = new AbilityBuilder(Ability)

        if (user.isAdmin) {
            can(Action.Manage, 'all')
        } else {
            can(Action.Read, User)
            cannot(Action.Create, User).because('Only admin')
        }
        return build({
            detectSubjectType: (item) => item.constructor as ExtractSubjectType<Subject>
        })
    }
}
