import type { ProcessStep } from '@/types';

interface ProcessTimelineProps {
  steps: ProcessStep[];
  color?: string;
}

export default function ProcessTimeline({ steps, color }: ProcessTimelineProps) {
  const circleClass = color === 'green' ? 'bg-green ring-green/20' : 'bg-primary ring-primary-bg';
  const lineClass = color === 'green' ? 'bg-green/30' : 'bg-border';

  return (
    <div className="relative">
      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-start gap-0">
        {steps.map((step, index) => (
          <div key={step.number} className="flex-1 relative">
            {index < steps.length - 1 && (
              <div className={`absolute top-6 left-1/2 w-full h-0.5 ${lineClass} z-0`} />
            )}
            <div className="relative z-10 flex flex-col items-center text-center px-4">
              <div className={`w-12 h-12 rounded-full ${circleClass} flex items-center justify-center text-white font-bold text-sm mb-4 ring-4 transition-colors`}>
                {step.number}
              </div>
              <h4 className="font-semibold text-navy mb-1">{step.title}</h4>
              <p className="text-text-muted text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="flex flex-col gap-0 md:hidden">
        {steps.map((step, index) => (
          <div key={step.number} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full ${circleClass} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-0.5 h-full min-h-8 ${lineClass} my-1`} />
              )}
            </div>
            <div className="pb-8">
              <h4 className="font-semibold text-navy mb-1">{step.title}</h4>
              <p className="text-text-muted text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
