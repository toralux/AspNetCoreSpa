describe('Login Model', () => {
  it('has email', () => {
    let loginModel = { email: 'test@test.test', password: 'Super Cat', rememberMe: true };
    expect(loginModel.email).toEqual('test@test.test');
  });
  it('has password', () => {
    let loginModel = { email: 'test@test.test', password: 'Super Cat', rememberMe: true };
    expect(loginModel.password).toEqual('Super Cat');
  });
  it('has rememberMe', () => {
    let loginModel = { email: 'test@test.test', password: 'Super Cat', rememberMe: true };
    expect(loginModel.rememberMe).toEqual(true);
  });
});
