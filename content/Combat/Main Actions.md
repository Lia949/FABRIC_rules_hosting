There are different types of main actions: 
- Simple actions: These are actions that require no check. They cannot interact with the opponent.
- Standard actions: Actions that require a skill or attribute check against a fixed DC or an opponens check
- Compound actions: These have a primary skill check. The quality of this check is used as a bonus for a secondary check?

Each main action has attack and defense value

# Basic Actions

| Name                                      | Description                                                                                                                                                                                                          | END       |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Pick up item                              | Take an item from the floor or the backpack                                                                                                                                                                          | -0        |
| Help                                      | This action can be used like a regular [[Character creation and Leveling up#Helping\|help]] for a skill check of an ally.                                                                                                                | -0        |
| Skill check                               | The duration depends on the task. If a certain amount of Points has to be reached sum the check Quality until the threshold is met.                                                                                  | -0        |
| Catch breath                              | Regain endurance                                                                                                                                                                                                     | + 2 x CON |
| Apply pressure to bleeding wound          | No blood points are lost this round caused by this wound                                                                                                                                                             | -0        |
| Stabilize serious wound/<br>stop bleeding | **Requirement:** Have something in hand to bandage with<br>	**Check:** FIN + medicine<br>	**DC:** Pain DC<br>	**Effect:** On success the wound is [[Healing#Stabilizing wounds\|stabilized]] and bleeding is stopped | -0        |


# Movement Actions
| Name      | Description                                                                                                                                                                                                                                                                                        | END |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| Sprint    | Move speed x 3 m                                                                                                                                                                                                                                                                                   | -3  |
| Tackle    | Move up to speed x 3 m and end the movement next to your target. <br>	**Check:** MOT or CON check against target MOT or CON<br>	**Success:** If successful both fall prone with target gaining a prone level of the Quality<br>	**Failure**: Attacker falls prone with level of (negative) Quality | -3  |
| Pass      | Sprint and try to go around an opponent, that tries to attack you (weapon attack, tripping, grabbing, ...)<br>**Check**: CON or MOT + athletics or acrobatics <br>**Success**: You avoid the attack and continue your movement<br>**Failure**: You get hit and end your movement                   | -2  |
| Block way | Sprint and intercept someones movement by simply standing in their way.<br>**Check**: CON or MOT + athletics <br>**Success**: You end the movement of your opponent                                                                                                                                | -1  |

# Combat Actions
All described actions are rolled on a martial skill. 
- **Type**: States the name of the action. If a specific martial skill is required it is stated in parenthesis
- **Attribute**: The base attribute used for the check
- **Description**: Effect of the action
- **END**: Endurance cost (if Endurance is used)

| Type                     | Attribute | Description                                                                                                                                                                                                              | END |
| ------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| Standard (close)         | MOT       | **Success**: Deals the weapon damage plus Quality as light wounds.                                                                                                                                                       | -1  |
| Defensive (close)        | MOT       | Variation of standard action. X can be chosen from 1 - CON and has to be declared before the check.<br>**Attack value**: - X<br>**Defense value**: + X                                                                   | -1  |
| Offensive (close)        | MOT       | Variation of standard action. X can be chosen from 1 - CON and has to be declared before the check.<br>**Attack value**: + X<br>**Defense value**: - X                                                                   | -2  |
| In and out (close)       | MOT       | **Bonus**: SPEED - opponents SPEED<br>**Success**: Your attack does your base weapon damage.                                                                                                                             | -3  |
| Push back (close)        | MOT/CON   | **Penalty**: opponents CON<br>**Success**: opponent is pushed back the Quality in meters.                                                                                                                                | -2  |
| Destabilize (close)      | MOT       | **Penalty**: opponents MOT<br>**Success**: opponent gets the unstable condition with a level of the Quality                                                                                                              | -1  |
| Steal item (close)       | MOT       | **Penalty**: opponents MOT<br>**Success**: you can take the item                                                                                                                                                         | -2  |
| Disarm<br>(close)        | MOT       | **Penalty**: opponents MOT/CON<br>**Success**: the opponent is disarmed.                                                                                                                                                 | -2  |
| Aimed attack (close)     | MOT       | **Penalty**: opponents MOT for hitting head or torso. MOT/2 to hit a specific limb.                                                                                                                                      | -2  |
| Swipe attack<br>(close)  | CON       | **Penalty**: X<br>Attack X enemies surrounding you at once. Every enemy individually dodges/counterattacks.<br>**Attack value**: + 0<br>**Defense value**: - X                                                           | -3  |
| Charge attack<br>(close) | CON       | **Requirement:** Sprint in previous main action<br>**Success**: deal your speed value as additional damage <br>**Failure**: take half of your speed as additional damage                                                 | -2  |
| Kick/Punch<br>(unarmed)  | MOT/CON   | Deals blunt damage equal to the Quality of the check.                                                                                                                                                                    | -1  |
| Grab (grappling)         | MOT/CON   | **Penalty**: opponents MOT/CON<br>**Success**: opponents Level of entangled is Quality / 2.                                                                                                                              | -1  |
| Strangle (grappling)     | MOT/CON   | **Requirement:** Start from grappling or from a sneak attack. <br>**Success**: the opponent looses the Quality in Consciousness points. The Level of entangled for the opponent is Quality / 2.                          | -2  |
| Throw (grappling)        | MOT/CON   | **Requirement:** Previous action was grappling<br>**Success**: the opponent falls prone with Level of Quality / 2 and takes blunt damage equal to the Quality / 2.                                                       | -2  |
| Pin (grappling)          | MOT/CON   | **Requirement:** Previous action was grappling, only against prone opponent. <br>**Success**: the target gains has a SPEED of 0 and gets the Quality as entangled.                                                       | -2  |
| Break limb (grappling)   | MOT/CON   | **Requirement**: Only from Pin<br>**Success**: deal your Quality + CON as damage. The opponent gets the Quality as entangled condition                                                                                   | -2  |
| Standard (ranged)        | MOT/FIN   | Roll a ranged combat skill against the target difficulty.                                                                                                                                                                | -1  |
| Aim<br>(ranged)          | FIN       | Make an attribute check on FIN. Difficulty for standard attack is lowered by Quality. <br>Can only be repeated to an accumulated maximum bonus of FIN.                                                                   | -0  |
| Reload<br>(ranged)       | FIN       | Make an attribute check on FIN against weapon loading DC. Unlisted weapons always take the full action to load.<br>1: handguns, bows<br>2: rifles<br>3: machine guns<br>**Success**: This action counts as a side action | -0  |
| Fast fire<br>(ranged)    | MOT       | Only for weapons with fast fire possibility. Roll ranged attacks against X targets (same target is possible). X is limited by MOT. <br>**Ranged DC**: + 2X (for every target)                                            | -2  |
|                          |           |                                                                                                                                                                                                                          |     |
|                          |           |                                                                                                                                                                                                                          |     |
