export type AdminUser = {
  adminId: string;
  permissions: string[];

};

export type GuestUser = {
  guestToken: string;
  expiresAt: Date;
};

export function isAdmin(user: AdminUser | GuestUser): user is AdminUser {
  return (user as AdminUser).adminId !== undefined;
}

export function extractAdmins(users: Array<AdminUser | GuestUser>,): AdminUser[] {
  return users.filter(isAdmin);
}
