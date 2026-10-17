import { Headset, PhoneIncoming, Repeat2 } from "lucide-react";
import { aiEmployees } from "@/lib/site-config";

const roleIcon = {
  Intake: PhoneIncoming,
  "Follow-up": Repeat2,
} as Record<string, typeof PhoneIncoming>;

export function AiEmployees() {
  return (
    <div className="employees">
      {aiEmployees.map((employee) => {
        const Icon = roleIcon[employee.role] ?? Headset;
        return (
          <article className="employee" key={employee.id}>
            <span className="employee-badge">
              <Icon size={20} strokeWidth={2} aria-hidden="true" />
            </span>
            <p className="employee-role">{employee.role}</p>
            <h3>{employee.name}</h3>
            <p className="employee-blurb">{employee.blurb}</p>
          </article>
        );
      })}
    </div>
  );
}
