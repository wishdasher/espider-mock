STATIC HOMEPAGE
about us
- cover photo
- mission (short)
- program values
- admin team (names, pictures?)

faq
- contact
	- email
- categorized questions
- ideas
	- cost and financial aid
	- when is the next {program} happening?
	- idk
	-

log in


# Accounts
## roles = student | teacher | parent | (admin)
	this goes back to having a subscription for updates
	only have one point of entry for account creation flow - explain the roles well
		parent: mention if legal guardian
		teacher: clarify that this is teaching for the programs
possible combinations: admin & everything

## account creation:
1. select role
role: Array<string>,

2. fill in basic info
type all = {
	firstName: string,
	lastName: string,
	email: string,
	password: string,
}

3. click on confirmation email link

4. fill out profile
```ts
type internal = {
	accountId: number,

}

type student = {
	phone: ?string,
	address: Address,
	graduationYear: number, // can be changed by role "admin"
	dob: Date,

	emergencyName:
	emergencyPhone:
	emergencyEmail: ?

	ccEmail????????????????????????????????????????????????????
	linkParentAccount?????????????????????????????????????????????????????????????????????

	// refToESP: ""
}

type parent = {
	phone:
}

type teacher = {
	address: Address, // mailing address, used for reimbursements
	phone: string,
	affiliation: "undergrad" | "graduate student" | "alum" | "faculty / staff" | "none",
	graduationYear: ?number,
	major/department: ?string,
}

type teacherReg = {
	avaibility:
	shirtSize: ? "XS" | "S" | "M" | "L" | "XL" | "XXL",
	shirtType: ? "unisex" | "fitted",
	dietaryRestrictions: ?blah,
}

type admin = {
	favoriteJuice
}
```

