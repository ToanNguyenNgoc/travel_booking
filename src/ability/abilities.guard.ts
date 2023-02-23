/*
https://docs.nestjs.com/guards#guards
*/

import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AbilityFactory, } from './ability.factory/ability.factory';
import { RequirementsRule, CHECK_ABILITY_KEY } from './abilities.decorator'
import { ForbiddenError } from '@casl/ability';

@Injectable()
export class AbilitiesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly caslAbilityFactory: AbilityFactory
  ) { }
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const rules = this.reflector.get<RequirementsRule[]>(CHECK_ABILITY_KEY, context.getHandler()) || []

    //get user form db
    const user = { id: 1, isAdmin: false }
    const ability = this.caslAbilityFactory.defineAbility(user)

    try {
      rules.forEach((rule) => ForbiddenError.from(ability).throwUnlessCan(rule.action, rule.subject))
      return true
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message)
      }
    }
  }
}
