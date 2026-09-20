---
title: Combat
---
> [!note]
Combat was not the initial focus of the game, so you might not expect the amount of time I spent trying to make it perfect. In many rules combat uses a turn based system and while this ensures a distinct order, it can be quite boring to wait for other players that only start thinking about what to do once their turn is coming up.
For me it was important to have a good level of realism and offer different tactical approaches (not simply: "I hit this thing with my sword"), without turning into a mess of special actions, that need to be reread every time. On top of that combat should be simple, quick, versatile and fun. While the number of possible actions might seem a lot at first, the true advantage is that the underlying mechanic will stay the same when you level up. Everything that is possible is there from the beginning. Leveling up just makes it easier and lets you specialize on certain fighting styles. 
There is a lot of balancing and simplification that has to be done still. I appreciate any constructive critisism in that regard!

# Start Combat
At the start of combat every character and opponent decides on their combat motivation. It describes their willingness to continue fighting. This is mainly used for opponents to decide when they yield or try to flee the fight.
> [!tip] **Combat Motivation**
> | Motivation | Description |  | Motivation | Description |
> | --- | ---| --- | --- | ---|
> | 1 | Head | | 4 | Right arm | 
> | 2 | Torso | | 5 | Left leg |
> | 3 | Left arm | | 6 | Right leg | 

# Combat Round
Each combat round represents 3 seconds of time. Every character can do one Main action (MA) and up to two different side actions (SA) per round. These can be physically represented as action tokens to make managing combat easier. 
## Main Actions
There are four types of [[Main Actions]] to choose from, they represent what the main goal of your character is in this combat round. Magic falls into one of the categories depending on its use. 
- [[Main Actions#Basic Actions|Basic Actions]]
- [[Main Actions#Armed Actions|Armed Close Combat Actions]]
- [[Main Actions#Unarmed Actions|Unarmed Close Combat Actions]]
- [[Main Actions#Ranged Combat Actions|Ranged Combat Actions]]
## Side Actions
[[Side Actions]] represent actions that either happen subconsciously or react on another players main action. Each side action can only be done once per round. 
## Phases in a combat round
Every combat round is split into phases that define which main actions can be taken during this round. A player can spend their MA token to do this main action. During every phase any side action can be executed by spending  a SA token. 
The order in which characters (allies as well as opponents) go in one phase is not defined. The person that first announces generally goes first. If another player wants to go before that they do a compared MOT check to see who goes first.
**Phases**
- Movement Actions
- Combat Actions
- Continued movement
- Basic Actions
- Conditions

# Combat Rules

## Conditions 
[[Conditions and Character state]] represent the center mechanic of combat. You can win by wounding your opponent enough for them to drop unconscious or die but there is a multitude of other conditions to disable them and end the fight. You can suffocate or restrain them, even influence their mind and make them confused, afraid, angry, controlled or insane. 
Instead of concentrating on damage output you can use tactics and make your opponents slower, dumber or more visible, depending on what makes sense for the fight. Each [[Main Actions|Main Action]] states which condition is dealt towards the opponent.

## Basic Rules for attacking and defending
To attack and defend choose a [[Main Actions|Main Action]]. Every Main action has an attack and defense modifier as well as an effect. They also have a cost in endurance or source points, depending on if you attack with physical means or magic. Usually only one opponent can be targeted by an action except if stated otherwise in the action.

**Close combat** checks use MOT or CON as base attribute together with the chosen combat skill. The attack modifier is added to the checks result and compared to the enemies defense value. The opponent can decide to fight back, dodge or ignore the attack. If they fight back they use their main action to do a check on their combat skill and add their defense modifier to that, dodging is a side action and if the opponent fully ignores the attack their defense level is automatically 0. 
If the attack value of the player is at least the defense value of the opponent they inflict a condition on the opponent. If the opponent fought back and their attack value is at least the defense value of the player, the player gets the corresponding condition of the enemies attack.

**Ranged attacks** use MOT or FIN as attribute and are rolled against a DC that consists of the following, if that DC is met the attacker deals their condition to the target.
> [!tip] **Ranged Attack DC  =  Distance - Target Size + Movement + Condition + Dodge**

Dodge is only part of the DC if the target takes a side action to dodge the attack. The other modifiers are summarized in the [[#Ranged DC table]]. If a character misses while shooting into a melee, it is possible that they hit another person instead. Roll 1d4 and hit the person (or creature) on that spot depending on the targets orientation (see [[#Orientation, Awareness and Stealth]]) 

To determine the hit body part for any attack roll on the [[#Hit location table]] (if no aimed attack was used).

## Hit location table
Is used to determine the hit limb after an normal attack (no aim).
> [!tip] **Roll a D6 to determine the hit location**
> | Rolled number | Limb |  | Rolled number | Limb |
> | --- | ---| --- | --- | ---|
> | 1 | Head | | 4 | Right arm | 
> | 2 | Torso | | 5 | Left leg |
> | 3 | Left arm | | 6 | Right leg | 

## Ranged DC table
> [!tip] **Ranged DC**
> | Level | Distance | Size | Movement | Condition |
> | --- | ---| --- | --- | ---|
> | 0 | 2 - 5 m |  Human | None| Perfect | 
> | 1 | 5 - 15 m | Horse (-)/ Dog (+) | Slow and steady | Slightly impeded vision or windy|
> | 2 | 15 - 50 m | Elephant (-)/ Cat (+) | Fast or irregular | Dim or strong wind  | 
> | 3 | 50 - 100 m | Giant (-)/ Hedgedog (+) | Extremely fast or chaotic | Almost dark or stormy | 
> | 4 | 100 - 500 m | Blue Whale (-)/ Mouse (+) |  |  |
> | 5 | 500 - 1000 m | Dragon (-)/ Fly (+) |   |  | 

## Cover, Crouching or Lying
If you have cover any opponent attacking with a ranged attack can aim at one of your exposed limbs. Alternatively they can shoot as normal and roll on the hit table. If the rolled limb is behind cover the attack deals no effect, except if the cover is destroyed too (DM decision).
Crouching targets count as one Size smaller, prone targets count as two sizes smaller.

## Orientation, Awareness and Stealth
The orientation of the character is important for dodging and missed shots, as well as awareness.
![[Orientation.png|149]]
**Dodging**: you can only dodge attacks coming from one direction. 
**Missed shot**: If a ranged attack misses roll a d4. The creature on that field is hit instead (only with base weapon damage)
**Awareness**: Your passive awareness equals 1/4 of WIT + perception, for the active awareness roll the check as usual. Each sense (seeing, hearing, smelling) can have additional modifiers that count as well. For seeing it is important to consider the orientation. To the front triple your awareness (passive or active). To the left and right double it. To the back it is zero. Awareness can be influenced by environment (see [[#Environment awareness table]])
**Stealth**: Your passive stealth equals 1/4 of MOT + stealth. Each property (visibility, sound, smelling) can have additional modifiers that count as well. Environment modifiers only count towards the Awareness modifier.
If your passive stealth is higher than your opponents awareness and that opponent did not interact with you in the previous round, they cannot defend from your action. Attacking an unaware opponent means rolling your close combat attack against the DC of 0. 

## Environment awareness table
> [!tip] **Awareness modifier**
>| Modifier | Seeing | Hearing | Smelling | 
>|---|---|---|---|
>| 0 | Clear day | Absolute silence | Normal environment |
>| -1 | Light haze / weak shadows | Quiet background noise | Faint distracting odors |
>| -2 | Dusk / light fog | Wind, rain, or soft conversation | Noticeable mixed smells | 
>| -3 | Poor lighting / moderate fog | Busy room or light machinery | Strong competing odors |
>| -4 | Dark night / heavy fog | Loud street, crowd, or heavy rain | Overpowering stench |
>| -5 | Very limited vision | Very loud machinery / gunfire nearby | Nauseating fumes |
>| -6 | Near blindness | Deafening noise | Overwhelming chemical or putrid odor |

## Shields, armor and Obstruction penalty
Your shield bonus (SB) is added to the defense value (after the check). The shield bonus also applies for dodging
Armor simply reduces the number of damage on the corresponding limb by its damage reduction (DR) value.
Heavy or large equipment has an obstruction penalty. If the sum rounded is larger than the CON stat, the character takes that level in the obstructed condition.

# Damage Types
• Blunt 
• Piercing
• Cutting
• Fire/Heat
• Acid
• Cold
• Psychic/Mental
• Magical
• Divine
• Necrotic
• Poison

## Area Attack
Some weapons have an area attack (e.g. grenades). The weapon card states the radius of the affected area in meters. The maximum distance of a ranged weapon applies for the center of the area attack. Damage is spread evenly on all body parts. Dodging can be used to reduce the damage. 

## Concentration
Some actions take longer than one combat round. If the character gets hit during the task they must roll a check on self-control against the amount of light wounds caused by the attack. On a fail the task is interrupted.

# Endurance
If the Endurance resource is used, then each action has the shown endurance cost.

# Size and Constitution/Stealth
During combat SIZE is added to CON and subtracted from Visibility (Stealth).
>[!tip] **Size table**
>| Size Level | Example    | | Size Level | Example    |
| ---------- | ---------- |  ---------- | ---------- | ---------- | 
| 6          | Dragon     || -1         |  Halfling        |
| 5          | Blue Whale || -2         |   Human torso     |
| 4          | Giant      || -3         |  Human head      |
| 3          | Two stacked elephants         | | - 4 | Hand |
| 2          | Elephant   || -5         | Human eye        |
| 1          | Horse, Orc      || -6         | Fly        |
| 0          | Human      | 

# Armed vs Unarmed 
Fighting unarmed against an armed opponent means rolling all checks with disadvantage. 

# Grappling
The opponent can break free if they win the compared grappling check. 