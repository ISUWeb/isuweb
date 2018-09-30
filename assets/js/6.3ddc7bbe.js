(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{167:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"git-branches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-branches","aria-hidden":"true"}},[t._v("#")]),t._v(" Git - Branches")]),t._v(" "),a("p",[t._v("Recall that git lets us save versions of our code that exist in parallel. These are called branches. Whe we created our git repository we got a branch that by default is named master, but we can create others.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The following command does two things at once. The command checkout is used to switch between branches and the flag b indicates that this is a new branch that needs to be created.")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("~/git-demo"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b mundo\nSwitched to a new branch "),a("span",{attrs:{class:"token string"}},[t._v("'mundo'")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("Now that we are on a new branch we can make changes independent of what's happening on the master branch. Let's change our Hello.java to print \"Hola, Mundo!\".")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Hello")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("main")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Hola, Mundo!"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("Git can show us exactly the line we have changed.")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("~/git-demo"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("diff")]),t._v(" Hello.java\nwarning: LF will be replaced by CRLF "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" Hello.java.\nThe "),a("span",{attrs:{class:"token function"}},[t._v("file")]),t._v(" will have its original line endings "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" your working directory\n"),a("span",{attrs:{class:"token function"}},[t._v("diff")]),t._v(" --git a/Hello.java b/Hello.java\nindex b77c397"),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("ecde780 100644\n--- a/Hello.java\n+++ b/Hello.java\n@@ -1,5 +1,5 @@\n public class Hello "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        public static void main"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n-               System.out.println"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Hello, World!"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n+               System.out.println"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Hola, Mundo!"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("Create a commit with this change. We will not walk you through it this time. You're on your own.")]),t._v(" "),a("p",[t._v("After this is done, we can change our branch to master. Our change will seemingly dissapear and our code will look exactly as it did before. But don't dispair, our work is not gone. It's still saved on the mundo branch. Git is just showing us the version that is on master.")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("~/git-demo"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\nSwitched to branch "),a("span",{attrs:{class:"token string"}},[t._v("'master'")]),t._v("\nM       Hello.java\n~/git-demo"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("So suppose that we are not aware of the change being done in the other branch (perhaps it was done by someone else!) and we refactor our program by extracting the hardcoded message to a private variable. Do this and create a commit. We'll wait.")]),t._v(" "),a("p",[t._v("At this point both of our branches have a commit in common, the first commit we created. On top of this commit they each have a diffrent change. How can we apply the work done on mundo onto the work done on master, you ask?")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("~/git-demo"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" merge mundo\nAuto-merging Hello.java\nCONFLICT "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": Merge conflict "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" Hello.java\nAutomatic merge failed"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" fix conflicts and "),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v(" commit the result.\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("Unfortunately git was unable to automatically merge the two branches. But we can resolve the conflict manually.")]),t._v(" "),a("p",[t._v("You will notice that Hello.java now looks different.")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("public class Hello "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        private static final String MESSAGE "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hello, World!"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        public static void main"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<<<")]),a("span",{attrs:{class:"token operator"}},[t._v("<<<")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" HEAD\n                System.out.println"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MESSAGE"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("==")]),a("span",{attrs:{class:"token operator"}},[t._v("==")]),a("span",{attrs:{class:"token operator"}},[t._v("==")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n                System.out.println"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Hola, Mundo!"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" feature/spanish-translation\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("This is git noting the conflicting change. It appears that someone change the message, while we extracted the message to a variable. So it seems like we want line 5, but we need to update line 2 with the translated message. After making this change our code now looks like this:")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Hello")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" String MESSAGE "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hola, Mundo!"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("main")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MESSAGE"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])])}],!1,null,null,null);e.options.__file="git-branches.md";s.default=e.exports}}]);