export interface UsersI {
	nom: string;
	prenom: string;
	id?: string;
	email: string;
	infos?: string;
	token?: string
	status: string;
}
export interface ContactI {
	nom: string;
	prenom: string;
	age: number;
	adresse?: AdresseI;
	telephone: string;
	email: string;
	status?: string;
	infos?: string;
}
interface AdresseI {
	rue: string,
	code_postal: number;
	ville: string;
}
