import React from 'react';

const StatRow = ({ label, value, unit }) => (
  <div className="stat-row">
    <span className="label">{label}</span>
    <span className="spacer" />
    <span className="value">{value}</span>
    {unit && <span className="unit">{unit}</span>}
  </div>
);

const Card = ({ children, className }) => (
  <div className={`card ${className || ''}`.trim()}>{children}</div>
);

export default function HealthDashboard() {
  return (
    <div className="dashboard">
      <header className="header">
        <div className="user">
          <div className="avatar" />
          <div>
            <div className="name">Shrawani Malkar</div>
            <div className="energy">
              <span className="bolt" /> 15
            </div>
          </div>
        </div>
        <button className="bell" aria-label="notifications" />
      </header>

      <Card className="card-training">
        <div className="card-title">
          <span className="icon dumbbell" /> Training
        </div>
        <div className="card-grid two">
          <StatRow label="Strength" value="15" unit="min" />
          <StatRow label="Cardio" value="15" unit="min" />
        </div>
      </Card>

      <Card className="card-calories">
        <div className="card-title">
          <span className="icon bowl" /> Calories
        </div>
        <div className="calories-body">
          <div className="meal">
            <div className="subtitle">Last Meal</div>
            <div className="meal-title">Chicken Salad</div>
            <div className="meal-kcal">100 kCal</div>
          </div>
          <div className="ring">
            <div className="ring-inner">
              <div className="ring-value">1050</div>
              <div className="ring-unit">kCal</div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="card-walk">
        <div className="card-title">
          <span className="icon walk" /> Walk
        </div>
        <div className="walk-body">
          <div>
            <div className="subtitle">Average Speed</div>
            <div className="speed">
              <span className="strong">5</span> km/hr
            </div>
          </div>
          <div className="progress-circle">
            <div className="progress-inner">
              <div className="steps">4000</div>
              <div className="unit">Steps</div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="card-water">
        <div className="card-title">
          <span className="icon droplet" /> Water
        </div>
        <div className="water-body">
          <div className="water-amount">
            <span className="strong">1.5</span> Litres
          </div>
          <div className="intake-bars">
            <span />
            <span />
            <span />
            <span />
            <span className="dots" />
          </div>
          <div className="remaining">4 glasses remaining</div>
        </div>
      </Card>

      <Card className="card-program">
        <div className="card-title">
          <span className="icon program" /> Program
        </div>
        <div className="program-body">
          <div className="challenge">
            <div className="title">7 Day Challenge</div>
            <div className="caption">Get Strong</div>
          </div>
          <div className="day-ring">
            <div className="day-inner">
              <div className="day">5<sup>th</sup></div>
              <div className="small">Day</div>
            </div>
          </div>
        </div>
      </Card>

      <nav className="tabbar">
        <button className="tab active">
          <span className="icon home" />
          <span>Home</span>
        </button>
        <button className="tab">
          <span className="icon health" />
          <span>Health</span>
        </button>
        <button className="tab">
          <span className="icon community" />
          <span>Community</span>
        </button>
        <button className="tab">
          <span className="icon store" />
          <span>Store</span>
        </button>
      </nav>
    </div>
  );
}

