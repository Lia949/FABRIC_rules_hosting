# Conditions
Conditions are ongoing effects that cause the character state to change. Changes of mental, physical and resource state are permanent and happen each round. Changes of the attribute state are temporary and get reset to the previous state once the condition ends.

Conditions have the following characteristics: 
- **Cause**: This is the source of the condition
- **Effect**: this is the effect the condition has on the character per Level
- **Level**: This is the Level of the effect
- **Decay**: The decay is normally negative and a fractional value. It decreases the Level every round by its value until the Level reaches 0 where the effect ends. Only for infection is this positive, as infections start from Level 0 up to 1.
- **Duration**: This is the maximum number of rounds for the condition. Every round the duration is decreased by one until it reaches 0, where the condition ends.
- **Check**: Some conditions can be ended by a check on the stated Attribute (or skill). Some cannot be ended which is indicated by a dash. If the check is marked with (inv.) then the check is inverted, which means that the condition is ended if the check is failed. 
- **DC**: This is the DC for the check

> [!tip] **Basic Conditions**
> | Condition | Effect | Check |
> | --- | ---| --- |
> | Burning, Freezing | 1 light wound per Level, spread over body | MOT |
> | Overheating | 1 light wound per Level, spread over body | - |
> | Entangled | - 1 on SPEED, MOT, FIN, CON per Level | CON or MOT |
> | Obstructed | - 1 on SPEED, MOT, FIN, CON per Level |  |
> | Poison | Can cause loss/gain of various state points, internal bleeding, ... | - |
> | Infection | Effect depends on infection, when Level has reached 1, effect is triggered | - |
> | Suffocating | Loss of 1 consciousness point per Level | Depends on source |
> | Nauseated | - 1 on WIT,CON,CHA,WIL,FIN,MOT per Level | Smelling (inv.) |
> | Pain | -1 on WIT,CON,CHA,WIL,FIN,MOT per Level. -1 on Consciousness per Level. WIL check to suppress effects for one round. | medicine |
> | Unstable | -1 on MOT, FIN, CON per Level. Failing the check leads to the character falling prone. | MOT or CON |
> | Prone | -1 on MOT, FIN, CON per Level. SPEED = 0 | none, stand up |
> | Resistance, Vulnerability | Halves/doubles damage of certain type | - |
> | Immunity | Ignores damage of a certain type | - |

The Level, Decay, Duration and DC depend on the source. The basic [[Main Actions]] define those values already. They are described like this CONDITION (Cause: , Effect: , Level: , Decay: , Duration:, Check: , DC: ).
New actions can be defined by the DM using the [[#Condition rating]] as a guideline. 

# Mental state
For each mental state points get accumulated. The **mental resistance** is the value that needs to be accumulated to gain one level. Whenever the character has a level in one or multiple mental states they need to make a self-control check against the state with the highest level before the round. If they fail they use their Main Action accordingly to the state: 
- **Confusion**: Do nothing
- **Rage**: Attack the closest enemy
- **Fear**: Hide behind the closest cover or run away
- **Control**: Act according to the controllers wishes
- **Insane**: Players choice in doing something insane, depending on the setting
## Mental Recovery
The character looses WIT points per round in each state except insanity during the condition phase. 
## Insanity
After combat has ended and a character has at least one level of insanity, they get a mental [[Characterstats#Scars|Scar]]. 
Insanity points can only be lowered by [[Healing#Therapy|Therapy]].

# Physical state
## Wounds
When the character takes damage they take that amount of damage points (also called light wounds). The **physical resistance** is the value that needs to be accumulated to gain one level (which is considered a severe wound). When you get a severe wound you also get a corresponding condition in 
PAIN (Cause: wound, Effect: -1 on WIT,CON,CHA,WIL,FIN,MOT,Consciousness, Level: Level of wound, Decay: -, Duration:-, Check: WIL (suppress for one round) , DC: 3 per Level)
If a part has **three** severe wounds the limb is lost, in case of head and torso this means instant death.  
Some attacks cause **bleeding** wounds, which is marked in the corresponding column of the limb. For each point of bleeding the charater looses one **Bloodpoint** (which is part of the resources).

There is a main action to stabilize wounds and end the pain condition. Long term [[Healing]] takes place outside of the battle.
## Exhaustion
Per Level gain a Condition 
(Cause: Exhaustion, Effect: -1 on one attribute that has been used a lot to get exhausted, Level: Level of exhaustion, Decay: -, Duration:-, Check: - , DC: -)
Once a Level in exhaustion is gained it can only be reduced by rest.

# Resource state
- **Bloodpoints**: If the value reaches 0 the character falls unconscious. At the negative maximum the character dies from blood loss
- **Consciousness**: If the value reaches 0 the character falls unconscious. At the negative maximum the character dies (eg. from suffocation)
- **Source points**: Are used to cast spells. 
- **Endurance**: Can optionally be used to pay for combat actions. Once it reaches 0 you gain a level in exhaustion.
- **Motivation**: If the value reaches 0 the character is either convinced by the other party to stop fighting or intimidated enough to be willing to give up. This stat is mainly used for opponents as players can always decide for themselves when to continue and when to stop fighting.

# Resource recovery
**Consciousness** and **Endurance** regenerate CON points per round (during condition phase), if no active condition reduces them currently.
**Source Points** regenerate a number of points equal to the [[Magic System#Availability|Availability]] of the surrounding per round. This also happens during the condition phase.
**Bloodpoints** regenerate one point per day.
You loose a level of **Exhaustion** every hour of rest.

# Attribute state
Attributes are influenced by conditions as described above. The attribute state summarizes the current values for all attributes.
Attribute statess are always temporary, meaning that if a condition ends its influence on attributes is removed.

# Condition rating (*experimental*)
The condition rating tries to balance main actions by calculating their Action Level from effect, level, decay, duration and DC. This allows to easily create new main actions, for example when [[Skill Trees]] are used or the DM wants more options for their players.

> [!tip] **Action Level   =  Effect cost + Decay + Duration + Check + DC **

> [!tip] **Effect cost per Level**
> | Effect | Cost per Level |
> | --- | ---| 
> | Confusion, rage, fear | 1 |
> | Control, insanity | 3 |
> | Light wounds | 1 |
> | Bleeding | 3 |
> | Consciousness, Motivation | 2 |
> | Source points | 2 |
> | Endurance | 1 |
> | WIT, CHA, WIL, CON, FIN, MOT, AUT  increase/decrease | 2 |
> | SPEED, SIZE increase/decrease | 3 |
> | Stealth/perception increase/decrease | 2 |
> | Resistance | 3 (per type) |
> | Vulnerability | 4 (per type) |
> | Immunity | 6 (per type) |

> [!tip] **Characteristic cost**
> | Characteristic | Cost |
> | --- | ---| 
> | Decay | -1/X Decay costs X. X has range 1 - 10  |
> | Duration | 1 per round of duration |
> | Check | Skill check: 0, Attribute check: 2, No check: 4  |
> | DC | 1 per DC |
