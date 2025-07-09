const SalesChart = () => {
    return (
      <div className="card">
        <h4>Sales</h4>
        <svg className="chart-svg" viewBox="0 0 42 42">
          <circle cx="21" cy="21" r="15.9155" fill="transparent" stroke="#eee" strokeWidth="4" />
          <circle cx="21" cy="21" r="15.9155" fill="transparent" stroke="var(--tertiary-color)" strokeWidth="4" strokeDasharray="50 50" strokeDashoffset="0" />
          <circle cx="21" cy="21" r="15.9155" fill="transparent" stroke="var(--primary-color)" strokeWidth="4" strokeDasharray="60 40" strokeDashoffset="50" />
          <circle cx="21" cy="21" r="15.9155" fill="transparent" stroke="var(--secondary-color)" strokeWidth="4" strokeDasharray="30 70" strokeDashoffset="110" />
          <circle cx="21" cy="21" r="15.9155" fill="transparent" stroke="var(--accent-color)" strokeWidth="4" strokeDasharray="20 80" strokeDashoffset="140" />
        </svg>
        <div className="legend">
          <div className="legend-item"><span className="legend-color" style={{ background: "var(--tertiary-color)" }}></span>Basic</div>
          <div className="legend-item"><span className="legend-color" style={{ background: "var(--primary-color)" }}></span>Pro</div>
          <div className="legend-item"><span className="legend-color" style={{ background: "var(--secondary-color)" }}></span>Advanced</div>
          <div className="legend-item"><span className="legend-color" style={{ background: "var(--accent-color)" }}></span>Enterprise</div>
        </div>
      </div>
    );
  };
  
  export default SalesChart;
  