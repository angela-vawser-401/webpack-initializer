const fs = require('fs');
const { writeJson } = require('../writers/writer');

describe('Will it mock?', () => {
  it('should mock a file', () => {
    fs.writeFileSync = jest.fn();
    writeJson('../', { name: 'spot'});
    expect(fs.writeFileSync).toHaveBeenCalledWith('../', '{"name":"spot"}', 'utf8');
  });
});