const { execSync } = require('child_process');

const run = (command) => {
  try {
    console.log(`\n▶ Running: ${command}`);
    execSync(command, { stdio: 'inherit' });
  } catch (err) {
    console.error(`❌ Error running command: ${command}`);
    process.exit(1);
  }
};

console.log('\n🔄 Resetting database...');
run('npx sequelize db:drop');
run('npx sequelize db:create');
run('npx sequelize db:migrate');
run('npx sequelize db:seed:all');
console.log('\n✅ Database reset complete.');
