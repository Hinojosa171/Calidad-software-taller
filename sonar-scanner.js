const sonar = require('sonarqube-scanner');

sonar.default.scanner(
  {
    serverUrl: 'https://sonarcloud.io',
    token: process.env.SONAR_TOKEN, // Usa variable de entorno
    options: {
      'sonar.projectKey': 'simonhinojosa01_calidad-software-taller',
      'sonar.organization': 'simonhinojosa01',
      'sonar.sources': 'src',
      'sonar.tests': 'tests',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.coverage.exclusions': '**/*.test.js'
    }
  },
  () => {
    console.log('✅ Análisis completado correctamente en SonarCloud');
  }
);
