import React, { useState } from 'react';
import { RobotsConfig, RobotsRule } from '../../../../types/seo';
import { Plus, Trash2 } from 'lucide-react';

interface RobotsManagerProps {
  config: RobotsConfig;
  onChange: (config: RobotsConfig) => void;
}

export default function RobotsManager({ config, onChange }: RobotsManagerProps) {
  const [newRule, setNewRule] = useState<RobotsRule>({
    userAgent: '*',
    rules: ['Allow: /'],
    paths: []
  });

  const handleAddRule = () => {
    onChange({
      ...config,
      customRules: [...config.customRules, newRule]
    });
    setNewRule({ userAgent: '*', rules: ['Allow: /'], paths: [] });
  };

  const handleRemoveRule = (index: number) => {
    const newRules = config.customRules.filter((_, i) => i !== index);
    onChange({ ...config, customRules: newRules });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Default Policy</h3>
        <div className="space-y-2">
          {config.defaultPolicy.map((rule, index) => (
            <input
              key={index}
              type="text"
              value={rule}
              onChange={(e) => {
                const newPolicy = [...config.defaultPolicy];
                newPolicy[index] = e.target.value;
                onChange({ ...config, defaultPolicy: newPolicy });
              }}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          ))}
          <button
            onClick={() => onChange({ ...config, defaultPolicy: [...config.defaultPolicy, ''] })}
            className="text-orange-600 hover:text-orange-700 text-sm font-medium"
          >
            + Add Rule
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Custom Rules</h3>
        <div className="space-y-4">
          {config.customRules.map((rule, index) => (
            <div key={index} className="border rounded-lg p-4 relative">
              <button
                onClick={() => handleRemoveRule(index)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              >
                <Trash2 className="w-5 h-5" />
              </button>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    User Agent
                  </label>
                  <input
                    type="text"
                    value={rule.userAgent}
                    onChange={(e) => {
                      const newRules = [...config.customRules];
                      newRules[index] = { ...rule, userAgent: e.target.value };
                      onChange({ ...config, customRules: newRules });
                    }}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rules
                  </label>
                  {rule.rules.map((ruleText, ruleIndex) => (
                    <input
                      key={ruleIndex}
                      type="text"
                      value={ruleText}
                      onChange={(e) => {
                        const newRules = [...config.customRules];
                        newRules[index].rules[ruleIndex] = e.target.value;
                        onChange({ ...config, customRules: newRules });
                      }}
                      className="w-full mb-2 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                  ))}
                  <button
                    onClick={() => {
                      const newRules = [...config.customRules];
                      newRules[index].rules.push('');
                      onChange({ ...config, customRules: newRules });
                    }}
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                  >
                    + Add Rule
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={handleAddRule}
            className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-orange-500 hover:text-orange-600 transition-colors flex items-center justify-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Custom Rule
          </button>
        </div>
      </div>
    </div>
  );
}