import fs from 'fs';
import { expect } from 'chai';
import sinon from 'sinon';
const readDatabase = require('./utils'); // Update the path as needed

describe('readDatabase function', () => {
  const mockData = 'name1,CS\nname2,SWE\nname3,CS\nname4,SWE\n';

  beforeEach(() => {
    sinon.stub(fs, 'readFile').callsArgWith(2, null, mockData);
  });

  afterEach(() => {
    fs.readFile.restore();
  });

  it('should resolve with the summary object', async () => {
    const result = await readDatabase('mock-path');
    expect(result).to.be.an('object');
  });

  it('should reject with an error if file reading fails', async () => {
	 fs.readFile.restore();
    const errorMessage = 'File not found';
    sinon.stub(fs, 'readFile').callsArgWith(2, new Error(errorMessage));

    await expect(readDatabase('mock-path')).to.throw();
  });
});

