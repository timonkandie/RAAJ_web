/**
 * RAAJ Studios — Performance & Device Connection Monitor
 * Task 18: Dynamic Device, Network & Hardware Capability Detection
 */

const PerformanceMonitor = {
  metrics: {
    cores: navigator.hardwareConcurrency || 4,
    memory: navigator.deviceMemory || 4,
    saveData: false,
    effectiveType: '4g',
    rtt: 50,
    downlink: 10,
    isLowPower: false,
    isSlowConnection: false,
    touchDevice: false,
    prefersReducedMotion: false
  },

  init() {
    this.detectHardware();
    this.detectNetwork();
    this.detectPreferences();
    this.applyOptimizationClasses();
    this.listenForChanges();
    console.log('[PerformanceMonitor] Device & Network Metrics:', this.metrics);
  },

  detectHardware() {
    this.metrics.cores = navigator.hardwareConcurrency || 4;
    this.metrics.memory = navigator.deviceMemory || 4;
    this.metrics.touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Devices with <= 2 CPU cores or <= 2GB RAM are low power
    this.metrics.isLowPower = this.metrics.cores <= 2 || this.metrics.memory <= 2;
  },

  detectNetwork() {
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn) {
      this.metrics.saveData = conn.saveData || false;
      this.metrics.effectiveType = conn.effectiveType || '4g';
      this.metrics.rtt = conn.rtt || 50;
      this.metrics.downlink = conn.downlink || 10;

      this.metrics.isSlowConnection = 
        this.metrics.saveData || 
        ['slow-2g', '2g', '3g'].includes(this.metrics.effectiveType) ||
        this.metrics.downlink < 1.5;
    }
  },

  detectPreferences() {
    this.metrics.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  applyOptimizationClasses() {
    const root = document.documentElement;

    // Hardware classes
    if (this.metrics.isLowPower) {
      root.classList.add('low-power-device');
    } else {
      root.classList.add('high-power-device');
    }

    // Network classes
    if (this.metrics.isSlowConnection) {
      root.classList.add('slow-connection');
    } else {
      root.classList.add('fast-connection');
    }

    if (this.metrics.saveData) {
      root.classList.add('save-data-active');
    }

    if (this.metrics.touchDevice) {
      root.classList.add('is-touch-device');
    } else {
      root.classList.add('is-pointer-device');
    }

    if (this.metrics.prefersReducedMotion) {
      root.classList.add('prefers-reduced-motion');
    }
  },

  listenForChanges() {
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn) {
      conn.addEventListener('change', () => {
        this.detectNetwork();
        this.applyOptimizationClasses();
        if (window.Toast && this.metrics.isSlowConnection) {
          Toast.show('Low bandwidth detected. Optimized asset loading activated.', 'info', 4000);
        }
      });
    }

    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      this.metrics.prefersReducedMotion = e.matches;
      this.applyOptimizationClasses();
    });
  },

  getMetrics() {
    return { ...this.metrics };
  },

  isLowPowerDevice() {
    return this.metrics.isLowPower;
  },

  isSlowConnection() {
    return this.metrics.isSlowConnection;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  PerformanceMonitor.init();
});

window.PerformanceMonitor = PerformanceMonitor;
