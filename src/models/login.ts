export interface Login {
  token: string;
};

export interface LoginStatus {
  authenticated: boolean;
  roles: [string?];
}
