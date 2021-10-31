describe('My Skills', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show "Welcome, Sup3r-Us3r" on start app', async () => {
    await expect(element(by.text('Welcome, Sup3r-Us3r'))).toBeVisible();
  });

  it('check register a new skill', async () => {
    const inputSkill = await element(by.id('input-skill'));
    const buttonAddNewSkill = await element(by.id('button-add-new-skill'));
    const flatListSkills = await element(by.id('flat-list-skills'));

    await inputSkill.tap();
    await inputSkill.typeText('React Native');
    await buttonAddNewSkill.tap();
    await flatListSkills.tap();

    await expect(flatListSkills).toBeVisible();
  });
});
