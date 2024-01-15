{
    const makefileNode = (name, children) => ({ name, children });
}

Makefile = _ rules:Rule* _ { return makefileNode("Makefile", rules); }

Rule = _ target:Target _ ":" _ dependencies:Dependencies _ commands:Commands? _ { return makefileNode("Rule", [target, dependencies, commands]); }

Target = _ name:[^\s:]+ _ { return makefileNode("Target", [{ name: "Name", value: name }]); }

Dependencies = _ names:(Dependency* { return makefileNode("Dependencies", names); }) _ { return names; }

Dependency = _ name:[^\s]+ _ { return makefileNode("Dependency", [{ name: "Name", value: name }]); }

Commands = _ commands:Command+ _ { return makefileNode("Commands", commands); }

Command = _ command:(!"\n" .)+ _ { return makefileNode("Command", [{ name: "Value", value: command.join('') }]); }

_ = [ \t\r\n]*


